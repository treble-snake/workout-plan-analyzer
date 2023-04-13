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
        <p>However, it&apos;s important to remember that it&apos;s can only give
          you a <b>rough
            guidelines</b>.</p>
      </>
    },
    {
      slug: 'how-to-use',
      question: 'Who can use it?',
      answer: <>
        <p>Hope is the tool can be useful for everybody interested in
          hypertrophy.</p>
        <p>
          If you are only a <b>beginner</b> and got a workout plan from
          somewhere
          (like the Internets),
          the tool can hopefully tell you if it&apos;s a at least a sensible
          plan.
        </p>
        <p>
          If you are an <b>intermediate or advanced</b> lifter, it can help you
          build your own plan or refine an existing one.
          You could also use it to build plans for other people.
        </p>
      </>
    },
    {
      slug: 'where-is-the-data-stored',
      question: 'Where is the data stored?',
      answer: <>
        <p>Nothing is stored on the server at the moment.</p>
        <p>
          All the data is stored in your browser&apos;s local storage.
          It means that if you clear your browser&apos;s cache, all your data
          will be
          lost.<br />
          Also, if you use different browsers or computers, you won&apos;t see
          your
          plans.<br />
          You can export and import them via &quot;Copy URL&quot; button though.
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
      question: 'What\'s with the name?',
      slug: 'whats-with-the-name',
      answer: <>
        <p>
          I wanted something powerful and unstoppable, so an icebreaker was a
          natural choice 😁<br />
          But how is that related to fitness? Let&apos;s name
          it &quot;Bicep&quot; - that&apos;s how!<br />
          P.S. Yes, naming is hard. Shut up.
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
