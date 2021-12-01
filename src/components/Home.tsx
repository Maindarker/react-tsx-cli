import * as React from 'react';
interface A {
    number: string
};
const Home = (props: A) => {
    console.log({...props})
    return <div>333</div>
}

export default Home;
