interface headerType {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: headerType) => {
  return (
    <div>
      {title} / {subtitle}
    </div>
  )
}

export default Header
