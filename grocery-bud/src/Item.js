import { DeleteButton, EditButton, ItemAction, ItemContainer, Text } from "./components/components"

function Item({ id, value, handleClickEdit, handleDelete }) {
    return (
        <ItemContainer>
            <Text>{value}</Text>
            <ItemAction><EditButton onClick={() => handleClickEdit(id)} /><DeleteButton onClick={() => handleDelete(id)} /></ItemAction>
        </ItemContainer>
    )
}
export default Item