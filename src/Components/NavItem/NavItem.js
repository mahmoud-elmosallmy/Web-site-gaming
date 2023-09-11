import './NavItem.css'

export default function NavItem(props) {
    return (
        <li className='nav-item'>
            {props.children}
        </li>
    )
}
export function NavItemDropDown(props) {
    return (
        <li className='nav-item dropdown'>
            {props.children}
        </li>
    )
}
// const NavItem = (props)  => {
//     return (
//         <li className='nav-item'>
//             {props.children}
//         </li>
//     )
// }
// const NavItemDropDown = (props) => {
//     return (
//         <li className='nav-item dropdown'>
//             {props.children}
//         </li>
//     )
// }
// export default NavItem;
// export {NavItemDropDown};
