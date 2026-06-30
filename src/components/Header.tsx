
type HeaderProps = {
  title?: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <nav className="navbar navbar-dark bg-dark text-info py-2 mb-4">
        <div className="container">
      <h4>{title || "Task Tracker"}</h4>
        </div>
    </nav>
  )
}

export default Header
