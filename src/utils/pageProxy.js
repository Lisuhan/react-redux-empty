import React, { Component } from "react";
import App from "App";

const tabPattern = "/~/";
const currentPage = "$$currentPage";
const df = "default";

class PageProxy extends Component {
    state = {};

    getPagePath(props) {
        let { match: { url } } = props || this.props;
        let path = url.substr(1) || "home";
        return path;
    }

    componentWillMount() {
        this.loadAsyncPages(this.getPagePath());
    }

    componentWillReceiveProps(nextProps) {
        let currentPath = this.getPagePath();
        let nextPath = this.getPagePath(nextProps);
        if ((currentPath, nextPath)) {
            this.loadAsyncPages(nextPath);
        }
    }

    renderPageElement() {
        let { state } = this;
        let pagePath = this.getPagePath();
        let PageComponent = state[pagePath];
        let pageElement = !!PageComponent ? (
            <PageComponent {...this.props} />
        ) : (
            <div>loading...</div>
        );
        return React.cloneElement(pageElement, {}, null);
    }

    render() {
        let pageElement = this.renderPageElement();
        return <App {...this.props}>{pageElement}</App>;
    }

    warn(msg, err) {
        console && console.log && console.log(msg, err)
    }

    loadAsyncPages(path) {
        let pagePath = path;
        let loadPage = this.state[pagePath]
                ? false
                : import(/* webpackMode: "lazy", webpackChunkName: "[request]" */ `&/containers/${pagePath}`);
        Promise.all([loadPage]).then(([PageComponent]) => {
            let needUpdate = false;
            let updateData = {};
            if(PageComponent) {
                needUpdate = true;
                updateData[pagePath] = PageComponent[df];
            }
            if(this.state[currentPage] !== pagePath) {
                needUpdate = true;
                updateData[currentPage] = pagePath;
            }
            if(needUpdate) {
                this.setState(updateData);
            }
        }).catch(err => {
            this.warn(`页面 ${pagePath} 加载失败`, err)
        });
    }
}

export default PageProxy;