import {Container} from "./style"

const PagesManager = ({current}) =>{
    return(
        <Container>
            <div style={current===0?{backgroundColor:"var(--primary-Purple", transition:"0.6s"}:{backgroundColor:"var(--light",transition:"0.6s"}}></div>
            <div style={current===1?{backgroundColor:"var(--primary-Purple", transition:"0.6s"}:{backgroundColor:"var(--light",transition:"0.6s"}}></div>
            <div style={current===2?{backgroundColor:"var(--primary-Purple", transition:"0.6s"}:{backgroundColor:"var(--light",transition:"0.6s"}}></div>
            <div style={current===3?{backgroundColor:"var(--primary-Purple", transition:"0.6s"}:{backgroundColor:"var(--light",transition:"0.6s"}}></div>
            <div style={current===4?{backgroundColor:"var(--primary-Purple", transition:"0.6s"}:{backgroundColor:"var(--light",transition:"0.6s"}}></div>
        </Container>
    )
}

export default PagesManager