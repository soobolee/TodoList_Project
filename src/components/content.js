import styled from "styled-components";
import List from "./list";
import Calendar from "./callendar";

const ContentDiv = styled.div`
    width: 100%;
    display: flex;
    padding: 10px;
    flex-direction: column;
    background-color: #F4F3EA;
`;

const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6%;
    font-size: 28px;
    padding-top: 15px;
    padding-left: 20px;

    & > p {
        border-bottom: 1px solid black;
    }

    & span {
        font-size: 17px;
        display: inline-block;
        margin: auto 10px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover{
            transform: scale(1.3);
        }
    }
`;

export default function Content() {
    
    return (
        <>
            <ContentDiv>
                <ContentHeader>
                    <p>공부</p>
                    <div>
                        <span>수정</span>
                        <span>삭제</span>
                    </div>
                </ContentHeader>
                <br />
                
                <div style={{display: 'flex', height : '80vh'}}>
                    <Calendar></Calendar>
                    <List></List>
                </div>
            </ContentDiv>
        </>
    )
}