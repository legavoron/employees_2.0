import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">

            {/* <EmployeesListItem name="John Smith" salary={800}/>
            <EmployeesListItem name="Endi Carrol" salary={3000}/>
            <EmployeesListItem name="Aleh Shchurko" salary={5000}/> */}
            {elements}
        </ul>
    )
}
export default EmployeesList;