import React, { Component } from "react"
import { Link, NavLink, withRouter } from "react-router-dom"
import "./header.css"
class Header extends Component {
  state = {}
  render() {
    // 由于 Header 组件不是路由组件(Route 下包裹的)
    // 导致他的 props 的 match 属性，获取不到任何信息
    const { pathname } = this.props.location
    return (
      <header>
        <div className='inner'>
          <Link to='/'>
            <img
              src='https://www.wanandroid.com/resources/image/pc/logo.png'
              alt=''
            />
          </Link>
          <ul className='nav'>
            <li>
              <NavLink
                className={
                  pathname === "/" || pathname === "/pindex" ? "active" : ""
                }
                exact
                activeClassName='active'
                to='/index'
              >
                <span className='text'>首页</span>
                <span className='line' />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/projectindex'>
                <span className='text'>项目</span>
                <span className='line' />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/tree'>
                <span className='text'>体系</span>
                <span className='line' />
              </NavLink>
            </li>
            <li>
              <NavLink to='/wxarticle'>
                <span className='text'>公众号</span>
                <span className='line' />
              </NavLink>
            </li>
            <li>
              <NavLink to='/navi'>
                <span className='text'>导航</span>
                <span className='line' />
              </NavLink>
            </li>
            <li>
              <NavLink to='/project'>
                <span className='text'>项目分类</span>
                <span className='line' />
              </NavLink>
            </li>
            <li>
              <NavLink to='/tools'>
                <span className='text'>工具</span>
                <span className='line' />
              </NavLink>
            </li>
            <li>
              <NavLink to='/collect'>
                <span className='text'>收藏</span>
                <span className='line' />
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}
export default withRouter(Header)
