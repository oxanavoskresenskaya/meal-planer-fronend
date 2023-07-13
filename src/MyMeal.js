import { AiFillEdit, AiFillDelete } from "react-icons/ai"

export const MyMeal = ({text, updatingInInput, deleteMeal}) => {
    return (
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}></AiFillEdit>
            <AiFillDelete onClick={deleteMeal}></AiFillDelete>
        </div>
    )
}