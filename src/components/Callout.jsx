import clsx from 'clsx'

import { Icon } from './Icon'

const styles = {
  note: {
    container:
      'bg-blue-5 dark:bg-black-70/10 dark:ring-1 dark:ring-black-30/10',
    title: 'text-sky-80 dark:text-black-10',
    body: 'text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-80 prose-code:text-sky-80 dark:text-black-30 dark:prose-code:text-slate-300',
  },
  warning: {
    container:
      'bg-yellow-5 dark:bg-black-70/10 dark:ring-1 dark:ring-black-30/10',
    title: 'text-yellow-70 dark:text-yellow-40',
    body: 'text-yellow-5 [--tw-prose-underline:theme(colors.yellow.40)] [--tw-prose-background:theme(colors.yellow.50)] prose-a:text-yellow-40 prose-code:text-yellow-40 dark:text-black-30 dark:[--tw-prose-underline:theme(colors.blue.70)] dark:prose-code:text-black-30',
  },
}

const icons = {
  note: (props) => <Icon icon="lightbulb" {...props} />,
  warning: (props) => <Icon icon="warning" color="yellow" {...props} />,
}

export function Callout({ type = 'note', title, children }) {
  let IconComponent = icons[type]

  return (
    <div className={clsx('my-8 flex rounded-3xl p-6', styles[type].container)}>
      <IconComponent className="flex-none w-8 h-8" />
      <div className="flex-auto ml-4">
        <p className={clsx('m-0 font-display text-xl', styles[type].title)}>
          {title}
        </p>
        <div className={clsx('prose mt-2.5', styles[type].body)}>
          {children}
        </div>
      </div>
    </div>
  )
}
