import React,{ Component} from 'react';
import App from '&/App/index';

class PageProxy extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage:''
        };
    }

    getPagePath(props){
       let { match:{url}} = props || this.props;
       let dealUrl =  url.substr(1)[0].toUpperCase() + url.substr(2);
       let path = dealUrl || "Home";
       return path ;
    }

    componentWillMount() {
        this.loadAsyncPages(this.getPagePath());
    }
    

    componentWillReceiveProps(nextProps) {
        let currentPath = this.getPagePath();
        let nextPath = this.getPagePath(nextProps);
        if (currentPath !== nextPath && !this.state[nextPath]) {
            this.loadAsyncPages(nextPath);
        }
    }

    render() {
        let {state} = this;
        let path = this.getPagePath();
        let PageComponent = state[path];
        return(
            <App {...this.props}>
                {PageComponent ? <PageComponent {...this.props} /> : null}
            </App>
        )
    }

    loadAsyncPages(path){
        import(
            /*webpackMode:"lazy",webpackChunkName:"[request]"*/`&/containers/${path}/index`
        ).then(Component => {
           this.setState({
               [path]:Component,
               currentPage:path
           })
        })
    }
}

export default PageProxy;