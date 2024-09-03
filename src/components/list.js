import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoList, setBtnString, setFadeEffect, setTodoId } from "../store/store";

const ListBoxDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    border: 1px solid black;
    border-radius: 10px;
    margin-left: 5px;
    overflow-y: hidden;
`;

const ListHeader = styled.div`
    width: 100%;
    padding-left: 20px;
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ListBox = styled.div`
    height: 85%;
    overflow-y: scroll;
`;

const ListItem = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 20px;
`;

const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 15px;
    
    & > p {
        padding-bottom: 5px;
        margin-bottom: 5px;
        overflow: hidden;
    }

    & > div {
        font-size: 14px;
        font-weight: 500;
        color: #999;
        overflow: hidden;
    }
`;

const ListButton = styled.div`
    display: flex;
    font-size: 14px;
    width: 20%;

    & > span {
        margin: auto 10px;
        cursor: pointer;
        transition: all 0.3s;
    }

    & > span:hover {
        transform: scale(1.3);
    }
`;

export default function List() {

    let todoList = useSelector((state) => state.todoList);

    const dispatch = useDispatch();

    return (
        <ListBoxDiv>
            <div style={{textAlign : 'center'}}>목록을 확인하세요<br/>추가/수정/삭제 할 수 있어요</div>
            <br />
            <hr />
            <ListHeader>
                <div>일정 목록</div>
                <button className="btn" onClick={() => {
                    dispatch(setBtnString('추가'));
                    dispatch(setTodoId(null));
                    dispatch(setFadeEffect('show'));
                }}>추가</button>
            </ListHeader>
            <hr />
            <ListBox className="list-box">
                {
                    todoList.map((item, idx) => {
                        return  <ListItem key={idx} onClick={(e) => {
                            dispatch(setBtnString('수정'));
                            dispatch(setTodoId(item.id));
                            dispatch(setFadeEffect('show'));
                        }}>
                                    <ListContent>
                                        <p>{item.title}</p>
                                        <div>{item.content}</div>
                                    </ListContent>
                                    <ListButton>
                                        <span onClick={() => {
                                            dispatch(setBtnString('수정'));
                                            dispatch(setTodoId(item.id));
                                            dispatch(setFadeEffect('show'));
                                        }}>수정</span>
                                        <span onClick={(e) => {
                                            e.stopPropagation();
                                            dispatch(deleteTodoList(item.id));
                                            dispatch(setBtnString('삭제'));
                                        }}>삭제</span>
                                    </ListButton>
                                </ListItem>
                    })
                }
            </ListBox>
        </ListBoxDiv>
    )
}