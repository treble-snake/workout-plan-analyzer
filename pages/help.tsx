import {NextPage} from 'next';
import React, {ReactNode} from 'react';
import {Anchor, Layout, Typography} from 'antd';

const FAQ: {
  slug: string;
  question: string;
  answer: ReactNode;
}[] =
  [
    {
      slug: 'what-is-this',
      question: 'What is this?',
      answer: <>
        <p>This tool can help you analyze an existing workout plan and find out
          what you can improve,
          but it can also help you build a new plan from scratch.</p>
        <p>For now the tool is mainly focused on <b>hypertrophy</b> (a.k.a.
          muscle
          building)</p>
        <p>However, it&apos;s important to remember that it can only give
          you <b>rough
            guidelines</b>, and your individual preferences, needs and goal
          might differ from what the algorithm is doing.</p>
        <p>
          If the tool gets any traction, I&apos;ll try to add more features
          to provide more flexibility and configurability.
        </p>
        <p>
          At the end of the day, remember that consistency is way more
          important,
          than any specific workout plan.
        </p>
      </>
    },
    {
      slug: 'who-can-use-it',
      question: 'Who can use it?',
      answer: <>
        <p>Hope is that the tool can be useful for everybody interested in
          hypertrophy and fitness.</p>
        <p>
          If you are a <b>beginner</b> and got a workout plan from
          somewhere
          (like &quot;the Internets&quot;),
          the tool can hopefully tell you if it&apos;s a at least a sensible
          plan.
        </p>
        <p>
          If you are an <b>intermediate or advanced</b> lifter, it can help you
          build your own plan or refine an existing one.<br />
          You could also use it to build plans for other people.
        </p>
      </>
    },
    {
      slug: 'cant-find-exercise',
      question: 'I can\'t find an exercise I want to add',
      answer: <>
        <p>
          Unfortunately, the tool doesn&apos;t have a database of all possible
          exercises.<br />
          But you can use generic variants of exercises to substitute for the
          missing ones.<br />
          Just search for the keyword &quot;any&quot; in the exercise list and
          pick the
          suitable option,
          for example &quot;Any chest variation&quot;.
        </p>
      </>
    },
    {
      slug: 'how-to-count-drop-sets',
      question: 'How do I count drop sets, rest pause, etc?',
      answer: <>
        <p>
          The tool doesn&apos;t have a special support for drop sets, rest
          pause and other advanced intensity techniques at the moment.<br />
          It&apos;s kinda personal and depends on how much they mess you up,
          but the rule of thumb might be - count them 2 for 1 and error on the
          lower side.<br />
          So 1 or 2 drop sets would be counted as 1 set, 3 or 4 drop sets would
          be
          counted as 2, etc. Same with rest pause sets.<br />
          It&apos;s even more difficult with cluster sets, you have to go by
          feel.
        </p>
      </>
    },
    {
      slug: 'where-is-the-data-stored',
      question: 'Where is the data stored?',
      answer: <>
        <p>Nothing is stored on the server at the moment (but it probably will
          be in the future).</p>
        <p>
          All the data is stored in your browser&apos;s local storage.
          It means that if you clear your browser&apos;s cache, all your data
          will be lost.<br />
          Also, if you use different browsers or computers, you won&apos;t see
          your plans.<br />
          You can export and import them via &quot;Copy URL&quot; button though.
        </p>
      </>
    },
    {
      question: 'What\'s with the name?',
      slug: 'whats-with-the-name',
      answer: <>
        <p>
          I wanted something powerful and unstoppable, so an icebreaker was a
          natural choice 😁<br />
          But how is that related to fitness? Let&apos;s name
          it &quot;Bicep&quot; - that&apos;s how!<br />
          P.S. Naming is hard. Shut up.
        </p>
      </>
    }
  ];

export const HelpPage: NextPage = () => {
  return (
    <Layout
      style={{
        background: 'transparent url("/icebreaker-bicep.png") no-repeat 1000px bottom',
      }}
    >
      <Layout style={{backgroundColor: 'transparent'}}>
        <Layout.Sider
          width={300}
          style={{backgroundColor: 'transparent'}}
        >
          <Anchor
            items={FAQ.map(({slug, question}) => ({
              title: question,
              key: slug,
              href: `#${slug}`
            }))}
          />

        </Layout.Sider>
        <Layout.Content style={{
          maxWidth: 600,
          backgroundColor: 'transparent'
        }}>
          <Typography.Title level={3}>FAQ</Typography.Title>
          {
            FAQ.map(({slug, question, answer}) => {
              return <div key={slug}>
                <Typography.Title level={4}
                                  id={slug}>{question}</Typography.Title>
                <Typography.Paragraph>{answer}</Typography.Paragraph>
              </div>;
            })
          }

        </Layout.Content>
      </Layout>
      <Layout.Footer style={{marginTop: 20, backgroundColor: 'transparent'}}>
        <Typography.Paragraph>
          In case of questions or suggestions, get in touch on{' '}
          <a href={'https://github.com/treble-snake/workout-plan-analyzer'}
             rel={'noopener noreferrer'} target={'_blank'}>GitHub</a>
        </Typography.Paragraph>
      </Layout.Footer>
    </Layout>
  );
};

export default HelpPage;
