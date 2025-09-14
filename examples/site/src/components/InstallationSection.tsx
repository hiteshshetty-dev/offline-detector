import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Card from './ui/CardComponent'

const code = `import { createOfflineDetector } from 'offline-detector';

const detector = createOfflineDetector({
  onOnline: () => console.log('Online'),
  onOffline: () => console.log('Offline')
});

detector.start();`
const InstallationSection = () => {
  return (
    <section className='py-16 px-4'>
        <div className='max-w-3xl mx-auto text-center space-y-8'>
            <h2 className='text-3xl lg:text-4xl font-bold'>Get Started</h2>
            <Card>
                <div className='space-y-6'>
                    <div>
                        <h3 className='text-lg font-semibold text-foreground mb-3'>Install the package</h3>
                        <SyntaxHighlighter
                            language="bash"
                            style={nightOwl}
                            customStyle={{
                                borderRadius: '8px',
                                fontSize: '14px',
                                padding: '16px'
                            }}
                        >
                            npm install offline-detector
                        </SyntaxHighlighter>
                    </div>
                    
                    <div>
                        <h3 className='text-lg font-semibold text-foreground mb-3'>Basic usage</h3>
                        <SyntaxHighlighter
                            language="javascript"
                            style={nightOwl}
                            customStyle={{
                                borderRadius: '8px',
                                fontSize: '14px',
                                padding: '16px'
                            }}
                        >
                        {code}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </Card>
        </div>
    </section>
  )
}

export default InstallationSection