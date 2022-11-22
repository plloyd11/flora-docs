import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-sm bg-green-40 py-2 px-4 font-semibold text-blue-80 hover:rounded-full focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500',
  secondary:
    'rounded-sm bg-blue-80 py-2 px-4 font-medium text-black-00 hover:rounded-full focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400 dark:bg-black-00 dark:text-blue-80',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(styles[variant], className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
