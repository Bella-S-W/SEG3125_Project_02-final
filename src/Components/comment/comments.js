import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

const Comments = () => {
  const data =[
    {
      userId: '02b',
      comId: '017',
      fullName: 'Guest',
      text: 'It was hard to watch Arya throw a rock at Nymeria and make her leave. I mean, it was hard to read about it, too, but seeing it was so sad.  🤔',
      avatarUrl: 'https://ui-avatars.com/api/name=Guest&background=random',
      replies: [],
    },
    {
        userId: '04b',
        comId: '018',
        fullName: 'Guest',
        text: 'This episode was written and directed by Catelyn Stark. Sansa is queen of the north, Arya independent doing her thing, Bran is king and Jon the bastard is exiled and forgotten..',
        avatarUrl: 'https://ui-avatars.com/api/name=Guest&background=random',
        replies: [],
      },
    {
        userId: '03b',
        comId: '018',
        fullName: 'Guest',
        text: 'I think so',
        avatarUrl: 'https://ui-avatars.com/api/name=Guest&background=random',
        replies: []
    }
  ]
  return <CommentSection
        currentUser={{
          currentUserId: '01a',
          currentUserImg:
            'https://ui-avatars.com/api/name=Guest&background=random',
        //   currentUserProfile:
        //     'https://www.linkedin.com/in/riya-negi-8879631a9/',
          currentUserFullName: 'Guest'
        }}
        logIn={{
          loginLink: 'http://localhost:3001/',
          signupLink: 'http://localhost:3001/'
        }}
        commentData={data}
        onSubmitAction={(data) => console.log('check submit, ', data)}
        currentData={(data) => {
          console.log('curent data', data)
        }}
      />
}

export default Comments