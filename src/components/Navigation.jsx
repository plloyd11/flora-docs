import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export function Navigation({ navigation, className }) {
  let router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display text-lg font-medium text-blue-80 dark:text-black-00">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-black-80 dark:border-black-70 lg:mt-4 lg:space-y-4 lg:border-black-20"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                      link.href === router.pathname
                        ? 'font-semibold text-blue-60 before:bg-blue-60 dark:text-green-40 dark:before:bg-green-40'
                        : 'text-black-50 before:hidden before:bg-black-30 hover:text-black-60 hover:before:block dark:text-black-30 dark:before:bg-black-50 dark:hover:text-black-20'
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
