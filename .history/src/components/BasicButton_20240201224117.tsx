interface buttonType {
  title: string
}

const BasicButton = ({ title }: buttonType) => {
  return <button>{title}</button>
}

export default BasicButton
