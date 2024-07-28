
'use strict';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return React.createElement(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'h1',
            {},
            'Add React in 30 Minutes'
        );
    }
}
class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'p',
            {},
            'Hello World!'
        );
    }
}


class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            {},
            React.createElement(LikeButton),
            React.createElement(Title),
            React.createElement(HelloWorld)
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Container));