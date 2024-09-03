import { configureStore, createSlice } from '@reduxjs/toolkit';

let todoList = createSlice({
    name : 'todoList',
    initialState : JSON.parse(localStorage.getItem('todoList')) || [],

    reducers : {
        setTodoList (state, action) {
            const item = action.payload;
            state.push(item);
            localStorage.setItem('todoList', JSON.stringify(state));
        },
        deleteTodoList (state, action) {
            const item = action.payload;
            const idx  = state.findIndex(obj => obj.id === item);

            localStorage.setItem('todoList', JSON.stringify(state));
            state.splice(idx, 1);
        },
        updateTodoList (state, action) {
            const item = action.payload;
            const idx  = state.findIndex((obj) => obj.id === item.id);

            state[idx].title = item.title;
            state[idx].content = item.content;


            // state = state.map(obj => {
            //     if (obj.id === item.id) {
            //         obj.title = item.title;
            //         obj.content = item.content;
            //     }
                
            //     return obj;
            // })

            localStorage.setItem('todoList', JSON.stringify(state));
        }
    }
});

let todoId = createSlice({
    name : 'todoId',
    initialState : {id : null},

    reducers : {
        setTodoId : function(state, action) {
            state.id = action.payload;
        }
    }
})

let calendarMonth = createSlice({
    name : 'calendarMonth',
    initialState : {month : ''},

    reducers : {
        setCalendarMonth(state) {
            let date = new Date();

            let [year, month, day] = getMonth(date);

            state.month = `${year}.${month}`;
        },
        changeMonth(state, action) {
            const flag = action.payload;

            let date = new Date(state.month);
            
            if (flag === '+') {
                date = new Date(date.setMonth(date.getMonth() + 1));    
            } else if (flag === '-') {
                date = new Date(date.setMonth(date.getMonth() - 1));    
            }

            let [year, month, day] = getMonth(date);

            state.month = `${year}.${month}`;
        },
    }
});

let fadeEffect = createSlice({
    name : 'fadeEffect',
    initialState : { flag : 'no-show' },

    reducers : {
        setFadeEffect (state, action) {
            state.flag = action.payload;;
        },
    }
});

let btnString = createSlice({
    name : 'btnString',
    initialState : { str : '추가' },

    reducers : {
        setBtnString (state, action) {
            state.str = action.payload;;
        },
    }
});

function getMonth(date) {
    let year     = date.getFullYear();
    let month    = date.getMonth() + 1;
    let day      = date.getDate();

    if (String(month).length < 2) {
        month = '0' + month;
    }

    return [year, month, day];
}

export let { setTodoList, deleteTodoList, updateTodoList } = todoList.actions;
export let { setTodoId } = todoId.actions;
export let { setCalendarMonth, changeMonth } = calendarMonth.actions;
export let { setFadeEffect } = fadeEffect.actions;
export let { setBtnString } = btnString.actions;

export default configureStore({
    reducer : {
        todoList        : todoList.reducer,
        todoId          : todoId.reducer,
        calendarMonth   : calendarMonth.reducer,
        fadeEffect      : fadeEffect.reducer,
        btnString       : btnString.reducer,
    }
})