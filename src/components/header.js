import { useState } from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 0 80px;

    background-color: #5F5F5F;
    color: #f5f5f5;
    border-bottom: 2px solid #F4F3EA;
`;

const TitleDiv = styled.div`
    text-align: left;
    width: 50%;
    font-size: 28px;
    display: flex;
    flex-direction: column;
    
    div {
        margin: 5px;
    }
`;

const MenuDiv = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-end;
`;

export default function Header() {

    let [title, setTitle] = useState(localStorage.getItem('todoTitle'));

    return (
        <HeaderDiv>
            <TitleDiv>
                <div>
                    {
                        title || '꿈을 시작하는'
                    }
                </div>
                <div style={{fontSize:'18px'}}>
                    ToDo List
                </div>
            </TitleDiv>
            <MenuDiv>
                <div className='btn' onClick={() => {
                    let newTitle = window.prompt('동기부여 할 수 있는 제목을 입력해주세요.', '꿈을 시작하는');
                    setTitle(newTitle);
                    localStorage.setItem('todoTitle', newTitle);
                }}>제목변경</div>
            </MenuDiv>
        </HeaderDiv>
    )
}
