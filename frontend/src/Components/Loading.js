import styled from "styled-components"

export default function Loading() {
    return (
        <Wrapper className="section-center">
            <div className="loading"></div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height:78vh;
    display:flex;
    align-items:center;
    justify-content:center;
`