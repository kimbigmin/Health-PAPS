import styled from 'styled-components';
import { useMemo, useState } from 'react';
import TextField from '@mui/material/TextField';
import CustomTextField from '../Material/CustomTextField';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// 학급에 속한 학생 리스트 초기 상태값 (리덕스에서 가져 옴)

function Form() {
    // 학급마다 측정 리스트(paps 리스트)가 달라짐 => 데이터 받아와서 해당 학급 측정 리스트로 렌더링
    const { id } = useParams();
    const managing = useSelector(
        (state: any) => state.user.user.managing.items,
    );
    const studentsData = useSelector((state: any) => state.class.students);
    const classData = managing.filter((el: any) => id === el.id)[0];
    console.log(studentsData);

    // const classData = useSelector((state: any) => state.class);
    const papsList = [
        classData.endurance,
        classData.flexibility,
        classData.strength,
        classData.speediness,
        '키',
        '몸무게',
    ];

    console.log(papsList);

    const [studentsList, setStudentList] = useState(studentsData);

    // 번호와 이름으로 구성된 고정된 테이블 => useMemo로 불필요한 리렌더링 방지
    const fixedTable = useMemo(() => {
        return studentsList.map((el: any, idx: number) => {
            return (
                <>
                    <tr>
                        <td>
                            <CustomTextField
                                label="번호"
                                pattern="onlyNum"
                                fixedValue={idx + 1}
                                number={idx + 1}
                                name="number"
                            />
                        </td>
                        <td>
                            <CustomTextField
                                label="이름"
                                pattern="onlyKor"
                                number={idx + 1}
                                data={el.name}
                                setData={setStudentList}
                                name="name"
                            />
                        </td>
                    </tr>
                </>
            );
        });
    }, []);

    // PAPS 측정 종목으로 이루어진 동적인 테이블 => useMemo로 불필요한 리렌더링 방지
    const movedTable = useMemo(() => {
        return studentsList.map((el: any, idx: number) => {
            return (
                <>
                    <tr>
                        <td>
                            <CustomTextField
                                label={papsList[0]}
                                pattern="onlyNumDot"
                                number={idx + 1}
                                data={el.record.endurance}
                                setData={setStudentList}
                                name="endurance"
                            />
                        </td>
                        <td>
                            <CustomTextField
                                label={papsList[1]}
                                pattern="onlyNumDot"
                                number={idx + 1}
                                data={el.record.flexibility}
                                setData={setStudentList}
                                name="flexibility"
                            />
                        </td>
                        <td>
                            <CustomTextField
                                label={papsList[2]}
                                pattern="onlyNumDot"
                                number={idx + 1}
                                data={el.record.strength}
                                setData={setStudentList}
                                name="strength"
                            />
                        </td>
                        <td>
                            <CustomTextField
                                label={papsList[3]}
                                pattern="onlyNumDot"
                                number={idx + 1}
                                data={el.record.speediness}
                                setData={setStudentList}
                                name="speediness"
                            />
                        </td>
                        <td>
                            <CustomTextField
                                label={papsList[4]}
                                pattern="onlyNumDot"
                                number={idx + 1}
                                data={''}
                                setData={setStudentList}
                                name="bmi"
                            />
                        </td>
                        <td>
                            <CustomTextField
                                label={papsList[5]}
                                pattern="onlyNumDot"
                                number={idx + 1}
                                data={''}
                                setData={setStudentList}
                                name="bmi"
                            />
                        </td>
                    </tr>
                </>
            );
        });
    }, []);

    return (
        <FormContainer>
            <FixedCol>
                <table>
                    <th className="num">번호</th>
                    <th className="name">이름</th>
                    <>{fixedTable}</>
                </table>
            </FixedCol>
            <MovedCol>
                <table>
                    <>
                        {[...papsList].map(el => (
                            <th key={el}>{el}</th>
                        ))}
                    </>
                    <>{movedTable}</>
                </table>
            </MovedCol>
        </FormContainer>
    );
}

const FormContainer = styled.form`
    scrollbar-width: none;
    display: flex;
    width: 112%;
    max-width: 1000rem;
    overflow: scroll;
    margin-bottom: 2rem;
`;

const FixedCol = styled.div`
    width: 100%;
    height: 100%;
    position: sticky;
    left: 0;
    background-color: white;
    z-index: 4;
    table {
        width: 100%;
    }

    th {
        font-size: 0.8rem;
        font-weight: 600;
    }

    tr {
        input {
            font-size: 0.8rem;
            text-align: center;
        }
    }

    .num {
        width: 20%;
    }

    .name {
        width: 30%;
    }
`;

const MovedCol = styled.div`
    width: 100%;
    table {
        overflow: scroll;
        width: 300%;
    }

    tr {
        input {
            font-size: 0.8rem;
            text-align: center;
        }
    }

    th {
        font-size: 0.8rem;
        font-weight: 600;
        position: sticky;
        top: 0;
    }
`;

export default Form;
