import styled from "styled-components"
import {motion} from "framer-motion"


export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 35px;
    position: absolute;
    left: 0;
    top: 40%;
    z-index: 8000;
    div{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        cursor: pointer;
    }
    @media screen and (min-width:1000px){
        left: 10px;
        div{
            width: 20px;
            height: 20px;
            &:hover{
                width: 30px;
                height: 30px;
                transition: 0.8s;
            }
        }
    }
`