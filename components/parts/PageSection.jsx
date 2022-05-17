import cn from 'classnames'

export default function PageSection({ className, children, color, id }) {
  return (
    <section className={cn('py-24 px-8', `bg-${color}`, `${className}`)} id={`${id}`}>
      {children}
    </section>
  )
}
