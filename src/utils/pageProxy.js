import React, { Component } from 'react';
import App from '&/app';

const currentPage = '$$currentPage';
const df = 'default';

class PageProxy extends Component {
	state = {};

	getPagePath = (props) => {
		const { match: { url } } = props || this.props;
		const path = url.substr(1) || 'home';
		return path;
	}

	componentWillMount() {
		this.loadAsyncPages(this.getPagePath());
	}

	componentWillReceiveProps(nextProps) {
		const currentPath = this.getPagePath();
		const nextPath = this.getPagePath(nextProps);
		if ((currentPath, nextPath)) {
			this.loadAsyncPages(nextPath);
		}
	}

	renderPageElement = () => {
		const { state } = this;
		const pagePath = this.getPagePath();
		const PageComponent = state[pagePath];
		const pageElement = PageComponent
			? <PageComponent {...this.props} />
			: <div>loading...</div>;
		return React.cloneElement(pageElement, {}, null);
	}

	render() {
		const pageElement = this.renderPageElement();
		return <App {...this.props}>{pageElement}</App>;
	}

	warn = (msg, err) => {
		console.log(msg, err);
	}

	loadAsyncPages = (path) => {
		const pagePath = path;
		const loadPage = this.state[pagePath]
			? false
			: import(/* webpackMode: 'lazy', webpackChunkName: '[request]' */ `&/pages/${pagePath}`);
		Promise.all([loadPage]).then(([PageComponent]) => {
			let needUpdate = false;
			const updateData = {};
			if (PageComponent) {
				needUpdate = true;
				updateData[pagePath] = PageComponent[df];
			}
			if (this.state[currentPage] !== pagePath) {
				needUpdate = true;
				updateData[currentPage] = pagePath;
			}
			if (needUpdate) {
				this.setState(updateData);
			}
		}).catch((err) => {
			this.warn(`页面 ${pagePath} 加载失败`, err);
		});
	}
}

export default PageProxy;
