import { classNames } from '@/utils/helpers';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className ?? '')}>
      {children}
    </div>
  );
}
