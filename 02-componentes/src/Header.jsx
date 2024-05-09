import './Header.module.css';
import { Logo } from './Logo';
import { Title } from './Title';

import React from 'react';

export const Header = (props) => {
    return (<header>

        <div className="container">
            <Logo />            
            <Title nombre={props.nombre}/>
        </div>
    </header>);
}
/*
export class Header extends React.Component {
    render() {
        return (<header>
            <div className="container">
                <Logo />
                <Title />
            </div>
        </header>);
    }
};*/