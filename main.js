const tasks = [];
let currentFilter = 'all';
let nextId = 1;

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const totalCount = document.getElementById('totalCount');
const activeCount = document.getElementById('activeCount');
const completedCount = document.getElementById('completedCount');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

addTaskBtn.addEventListener('click', handleAddTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleAddTask();
    }
});

clearCompletedBtn.addEventListener('click', () => {
    tasks.length = 0;
    tasks.push(...tasks.filter(task => !task.completed));
    render();
});

taskList.addEventListener('click', (event) => {
    if (event.target.matches('.checkbox')) {
        const taskId = parseInt(event.target.parentElement.dataset.taskId);
        toggleTask(taskId);
    }

    if (event.target.matches('.task-text')) {
        const taskId = parseInt(event.target.parentElement.dataset.taskId);
        toggleTask(taskId);
    }

    if (event.target.matches('.delete-btn')) {
        const taskId = parseInt(event.target.parentElement.dataset.taskId);
        deleteTask(taskId);
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        filterBtns.forEach(b => b.classList.remove('filter-btn-active'));
        event.target.classList.add('filter-btn-active');
        currentFilter = event.target.dataset.filter;
        render();
    });
});

function handleAddTask() {
    const text = taskInput.value.trim();

    if (!text) {
        alert('Please enter a task');
        return;
    }

    const task = {
        id: nextId++,
        text: text,
        completed: false,
        createdAt: new Date()
    };

    tasks.push(task);
    taskInput.value = '';
    taskInput.focus();
    render();
}

function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
    }
    render();
}

function deleteTask(taskId) {
    const indexToRemove = tasks.findIndex(t => t.id === taskId);
    if (indexToRemove !== -1) {
        tasks.splice(indexToRemove, 1);
    }
    render();
}

function getFilteredTasks() {
    if (currentFilter === 'active') {
        return tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        return tasks.filter(task => task.completed);
    }
    return tasks;
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const active = total - completed;

    totalCount.textContent = total;
    activeCount.textContent = active;
    completedCount.textContent = completed;
}

function render() {
    taskList.innerHTML = '';
    const filteredTasks = getFilteredTasks();

    filteredTasks.forEach(task => {
        const li = createTaskElement(task);
        taskList.appendChild(li);
    });

    updateStats();

    if (tasks.length === 0) {
        emptyState.classList.add('show');
    } else {
        emptyState.classList.remove('show');
    }
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'task-item';

    if (task.completed) {
        li.classList.add('completed');
    }

    li.dataset.taskId = task.id;
    li.innerHTML = `
        <div class="checkbox"></div>
        <span class="task-text">${task.text}</span>
        <button class="delete-btn">✕</button>
    `;

    return li;
}

window.addEventListener('load', () => {
    taskInput.focus();
    render();
});