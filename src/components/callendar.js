import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCalendarMonth, changeMonth } from "../store/store";
import ConstData from "../Const";

const CalendarBoxDiv = styled.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    padding: 50px;
    border: 1px solid black;
    border-radius: 10px;
`;

const CalendarHeader = styled.div`
    width: 30%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const CalendarBox = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

const CalendarItem = styled.div`
    width: 100%;
    height: 100px;
    text-align: center;
    cursor: pointer;
`;


function makeCalendar(date) {
    const currentYear    = new Date(date).getFullYear();
    const currentMonth   = new Date(date).getMonth() + 1;

    const totalFirstDay  = new Date(date).getDay() - 1;
    const totalLastDay   = new Date(currentYear, currentMonth, 0).getDate();

    const monthLimitDay  = totalFirstDay + totalLastDay;
    const monthNextDay   = Math.ceil(monthLimitDay / 7) * 7;

    let totalDate = Array.from({length : monthNextDay}, (item, idx) => {
        if (totalFirstDay > idx || idx > monthLimitDay) {
            return 0;
        }
        return idx - totalFirstDay;
    });

    return totalDate;
}

export default function Calendar() {

    let dispatch = useDispatch();

    let [calendarData, setCalendarData] = useState([]);
    let calendarMonth = useSelector((state) => state.calendarMonth);

    useEffect(() => {
        dispatch(setCalendarMonth());
    }, [])

    useEffect(() => {
        let totalDate = makeCalendar(calendarMonth.month);
        setCalendarData(totalDate);
    }, [calendarMonth])

    return (
        <CalendarBoxDiv>
            <div style={{textAlign : 'center'}}>달력에서 확인하세요<br />클릭해서 일정을 정렬할 수 있어요</div>
            <br />
            <hr />
            <CalendarHeader>
                <button className='btn' onClick={() => {dispatch(changeMonth('-'))}}>{ '<' }</button>
                <div>{ calendarMonth.month }</div>
                <button className='btn' onClick={() => {dispatch(changeMonth('+'))}}>{ '>' }</button>
            </CalendarHeader>
            <hr />
            <CalendarBox>
                {
                    ConstData.weeks.map((item, idx) => {
                        return <CalendarItem key={idx}>{ item }</CalendarItem>
                    })
                }
                {
                    calendarData.map((item, idx) => {
                        return <CalendarItem key={idx}><span className={ item && 'today' }>{ item === 0 ? '' : item }</span></CalendarItem>
                    })
                }
                    
            </CalendarBox>
        </CalendarBoxDiv>
    )
}