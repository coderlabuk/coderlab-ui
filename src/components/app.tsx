import * as React from 'react'
import { Container } from '@material-ui/core';
import { Navbar } from "./navbar"


export const AppContainer = (props: any) => {
    return (
        <div>
            <Navbar />
            <Container>
                {props.children}
            </Container>
        </div>
    )
}
