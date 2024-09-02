import styled from "styled-components";

const NavDiv = styled.div`
    width: 15%;
    height: 90vh;
    padding: 10px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: #5F5F5F;

    & > .plus {
        font-size: 17px;
        margin: 25px 0;
        width: 100%;
    }

    & > div {
        margin: 20px 0;
    }

    & > .btnNav {
        margin: 0 10px;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.1s;
        text-align: center;
        color: #f5f5f5;
    }

    & > .btnNav:hover {
        background-color: #2C3E50;
        transform: rotate(13deg);
    }
`;

export default function Nav() {
    
    return (
        <NavDiv>
            <button className="btn plus">일정 추가</button>
            <div className="btnNav">공부</div>
            <div className="btnNav">숙제</div>
        </NavDiv>
    )
}