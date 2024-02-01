interface buttonType {
  title: string
}

const LoadButton = ({ title }: buttonType) => {
  return <button>{title}</button>
}

export default LoadButton
