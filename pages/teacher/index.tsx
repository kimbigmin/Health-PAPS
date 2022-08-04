import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardBox } from '../../styles/Card';
import { useDispatch } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../../src/graphql/queries';
import { useEffect } from 'react';

/** 선생님 로그인 후 메인 페이지 **/
const Teacher_MainPage: NextPage = () => {
    const dispatch = useDispatch();

    // 선생님 정보 불러오는 fetch함수
    const fetchUser = async () => {
        try {
            const result = await API.graphql(
                graphqlOperation(getUser, {
                    id: 'a06e0753-a012-48d1-bad1-8e6ce1f11d85',
                }),
            );
            dispatch({ type: 'user/LOGIN', payload: result });
        } catch (err) {
            throw new Error(`로그인 정보를 불러 올 수 없습니다. : ${err}`);
        }
    };

    // 선생님 로그인 (임시)
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
            <Head>
                <title>Health-PAPS</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CardBox>
                    <Link href="/teacher/list">
                        <Card url="https://images.unsplash.com/photo-1508962914676-134849a727f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
                            <h2>PAPS 측정 결과 입력</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quidem possimus facere amet
                                nostrum cupiditate ea, atque temporibus sed!
                            </p>
                        </Card>
                    </Link>
                    <Link href="/teacher/method">
                        <Card url="https://images.unsplash.com/photo-1618073194091-9b24230ddb2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80">
                            <h2>PAPS 측정 방법</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Vitae, soluta quam.
                            </p>
                        </Card>
                    </Link>
                </CardBox>
            </main>
        </>
    );
};

export default Teacher_MainPage;
