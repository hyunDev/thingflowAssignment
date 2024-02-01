interface buttonType {
  title: string
  onClick: () => {}
}

const BasicButton = ({ title, onClick }: buttonType) => {
  return <button onClick={onClick}>{title}</button>
}

export default BasicButton
