interface buttonType {
  title: string
  onClick: () => void
}

const BasicButton = ({ title, onClick }: buttonType) => {
  return <button onClick={onClick}>{title}</button>
}

export default BasicButton
