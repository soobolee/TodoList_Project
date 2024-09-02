import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setFadeEffect, setTodoList, updateTodoList } from "../store/store";
import { useEffect, useState } from "react";

const ModalBoxDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 999;
`;

const ModalBox = styled.div`
    width: 30vw;
    height: 60vh;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 50px;
    position: relative;

    & > p {
        font-size: 18px;
        margin: 7px;
    }
    
    & > .titleInput {
        height: 30px;
        padding-left: 10px;
    }

    & > .contentInput {
        height: 250px;
        padding: 10px;
    }

    & > button {
        width: 50%;
        margin: 0 auto;
        transition: all 0.1s;
    }
`;

const CloseBtn = styled.input`
    position: absolute;
    top: 25px;
    right: 25px;
`;

export default function Modal() {

    const dispatch   = useDispatch();
    const fadeEffect = useSelector(state => state.fadeEffect);
    const todoList   = useSelector(state => state.todoList);
    const btnString  = useSelector(state => state.btnString);
    const todoId     = useSelector(state => state.todoId);

    let [title, setTitle]     = useState('');
    let [content, setContent] = useState('');

    useEffect(() => {
        if (todoId.id === null) {
            setTitle('');
            setContent('');
        } else {
            const todoItem = todoList.find((item) => item.id === todoId.id);

            setTitle(todoItem.title);
            setContent(todoItem.content);
        }
    }, [todoId])

    return (
        <ModalBoxDiv className={fadeEffect.flag}>
            <ModalBox>
                <CloseBtn type="button" value={'X'} className="btn" onClick={() => {
                    dispatch(setFadeEffect('no-show'))
                    setTitle('');
                    setContent('');
                }}></CloseBtn>
                <p>제목</p>
                <input type="text" className="titleInput" value={title} onChange={(e) => {
                    setTitle(e.currentTarget.value);
                }}/>
                <br />

                <p>내용</p>
                <textarea className="contentInput" value={content} onChange={(e) => {
                    setContent(e.currentTarget.value);
                }}/>

                <br />

                <button className="btn" onClick={() => {
                    
                    let id = 0;
                    if (todoList.length > 0) {
                        const ids = todoList.map((obj) => obj['id']);

                        id = Math.max(...ids);
                        id += 1;
                    }

                    if (btnString.str === '추가') {
                        dispatch(setTodoList( { id, title, content } ));
                    }
                    else if (btnString.str === '수정') {
                        dispatch(updateTodoList( { id : todoId.id, title, content } ));
                    }
                    
                    dispatch(setFadeEffect('no-show'));
                    setTitle('');
                    setContent('');

                }}>{ btnString.str }</button>
            </ModalBox>
        </ModalBoxDiv>
    )
}