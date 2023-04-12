import {useState} from 'react'
import {MainCon,Con,Heading,Para,Img,Button,Contain,Total,Head,Tail} from './styledComponents'

let tossResult=0

const CoinToss=()=>{
    const [head,setHead]=useState(0)
    const [tail,setTail]=useState(0)

    const getTotal=()=>{
        tossResult=Math.floor(Math.random()*2)
        if(tossResult===0){
        setHead(prevState=>prevState+1)
        }
        else{
            setTail(prevState=>prevState+1)
        }
    }

    return(
        <MainCon>
            <Con>
                <Heading>Coin Toss Game</Heading>
                <Para>Heads (or) Tails</Para>
                <Img src={tossResult? "https://assets.ccbp.in/frontend/react-js/tails-img.png" :"https://assets.ccbp.in/frontend/react-js/heads-img.png"} alt="toss game"/>
                <Button type="button" onClick={getTotal}>Toss Coin</Button>
                <Contain>
                    <Total>Total: {head+tail}</Total>
                    <Head>Heads: {head}</Head>
                    <Tail>Tails: {tail}</Tail>
                </Contain>
            </Con>
        </MainCon>
    )
}

export default CoinToss