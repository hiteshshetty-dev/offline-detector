import React from 'react'

interface CardProps {
    children: React.ReactNode;
}
const CardContent: React.FC<CardProps> = ({ children })  => {
  return (
    <div className='p-6'>{children}</div>
  )
}

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className='rounded-lg border border-gray-700 bg-gray-800/50 text-foreground text-left'>
            <CardContent>
                {children}
            </CardContent>
        </div>
    );
}
export default Card