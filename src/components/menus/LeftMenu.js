import React, {Component} from "react";

class LeftMenu extends Component{
    componentDidMount(){
        window.$('.left-menu .left-menu-list-submenu > a').on('click', function(){
            var accessDenied = window.$('body').hasClass('menu-top') && window.$(window).width() > 768;
            if (!accessDenied) {
                var that = window.$(this).parent(),
                    opened = window.$('.left-menu .left-menu-list-opened');

                if (!that.hasClass('left-menu-list-opened') && !that.parent().closest('.left-menu-list-submenu').length)
                    opened.removeClass('left-menu-list-opened').find('> ul').slideUp(200);

                that.toggleClass('left-menu-list-opened').find('> ul').slideToggle(200);
            }
        });
    }

    componentWillUnmount(){
        window.$('.left-menu .left-menu-list-submenu > a').off("click");
    }

    render(){return(
        <nav className="left-menu">
            {this.props.children}
        </nav>
    )}
}
export default LeftMenu;