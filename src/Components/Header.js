import React,{Component} from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content}from 'react-mdl';
class Header extends Component{
    render(){
        return(
            <div style={{height: '300px', position: 'relative'}}>
            <Layout fixedHeader>
             <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
        )
    }
}
export default Header;