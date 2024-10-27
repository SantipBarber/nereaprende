import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const StudySection = ({ topics }) => (
  <div className="space-y-8">
    {topics.map((topic, index) => (
      <Card key={index} className="overflow-hidden">
        {/* <CardHeader> */}
          {/* <CardTitle className="text-2xl font-bold">{topic.title}</CardTitle> */}
        {/* </CardHeader> */}
        <CardContent>
            {/* Si la imagen tiene cadena vacía no debe mostrar el hueco */}
          {topic.image && <img src={topic.image} alt={topic.title} className="w-full h-auto my-6 rounded-lg" />}
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children, ...props }) =>
                children ? (
                  <h1 className="text-3xl font-bold mb-4 mt-6" {...props}>
                    {children}
                  </h1>
                ) : null,
              h2: ({ children, ...props }) =>
                children ? (
                  <h2 className="text-2xl font-semibold mb-3 mt-5" {...props}>
                    {children}
                  </h2>
                ) : null,
              h3: ({ children, ...props }) =>
                children ? (
                  <h3 className="text-xl font-medium mb-2 mt-4" {...props}>
                    {children}
                  </h3>
                ) : null,
              p: ({ children, ...props }) => (
                <p className="mb-4 text-base leading-relaxed" {...props}>
                  {children}
                </p>
              ),
              ul: ({ children, ...props }) => (
                <ul className="list-disc list-outside pl-5 space-y-2" {...props}>
                  {children}
                </ul>
              ),
              ol: ({ children, ...props }) => (
                <ol className="list-decimal list-outside mb-4 pl-5" {...props}>
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li className="mb-2 text-base" {...props}>
                  {children}
                </li>
              ),
              blockquote: ({ children, ...props }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4" {...props}>
                  {children}
                </blockquote>
              ),
              strong: ({ children, ...props }) => (
                <strong className="font-bold" {...props}>
                  {children}
                </strong>
              ),
              em: ({ children, ...props }) => (
                <em className="italic" {...props}>
                  {children}
                </em>
              ),
            }}
            className="markdown-content"
          >
            {topic.content}
          </ReactMarkdown>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default StudySection;