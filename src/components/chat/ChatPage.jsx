import React from 'react';

const pinnedConversations = [
  {
    id: 'conv-1',
    title: 'Campaign launch with sales insights',
    summary: 'Notes and datasets shared yesterday',
    status: 'In progress',
  },
  {
    id: 'conv-2',
    title: 'Quarterly demand planning',
    summary: 'Waiting for finance approval',
    status: 'Pending',
  },
  {
    id: 'conv-3',
    title: 'Onboarding automation sprint',
    summary: 'All workflows migrated',
    status: 'Completed',
  },
];

const activeTasks = [
  { id: 'task-1', title: 'Prepare FAQ sheet for leadership', due: 'Due today' },
  { id: 'task-2', title: 'Summarise the new NPS survey responses', due: 'Due tomorrow' },
];

const archivedTasks = [
  { id: 'arch-1', title: 'Clean marketing attribution dataset' },
  { id: 'arch-2', title: 'Tag historical support tickets' },
];

const chatMessages = [
  {
    id: 'msg-1',
    author: 'Odie',
    role: 'assistant',
    time: '09:15',
    content:
      "Hi Adam! I can help you brief the leadership team on our hiring and engagement metrics. Would you like me to pull the latest datasets?",
  },
  {
    id: 'msg-2',
    author: 'Adam Smith',
    role: 'user',
    time: '09:17',
    content:
      'Yes please. Give me a quick overview of headcount growth by department, plus any spikes in attrition over the last quarter.',
  },
  {
    id: 'msg-3',
    author: 'Odie',
    role: 'assistant',
    time: '09:19',
    content:
      'Pulled headcount and attrition metrics from HC_Dashboard.xlsx. Marketing and Product grew the fastest (+12.4% MoM). Customer Success attrition spiked to 6.2% in March, mainly in Tier 1 roles.',
    highlights: [
      '• Added tables: headcount_trend.csv, attrition_breakdown.csv',
      '• Suggested action: run exit interview theme analysis',
    ],
  },
  {
    id: 'msg-4',
    author: 'Adam Smith',
    role: 'user',
    time: '09:21',
    content: 'Great. Draft a two-slide summary highlighting risks and recommendations for the exec meeting.',
  },
  {
    id: 'msg-5',
    author: 'Odie',
    role: 'assistant',
    time: '09:23',
    content:
      'Summary drafted. Slide one covers growth by department, slide two covers attrition risk with mitigation plan. Want me to package it as a keynote deck?',
  },
];

const ChatPage = () => {
  return (
    <section className="page" id="chat">
      <header className="page-header chat-header">
        <div>
          <p className="page-subtitle">Workspace</p>
          <h1>Collaborate with Odie</h1>
          <p className="page-description">
            Ask questions, assign work, or explore datasets in the same canvas. Your assistant keeps track of every
            decision your team makes.
          </p>
        </div>
        <div className="chat-header__actions" aria-label="Conversation controls">
          <button type="button" className="chat-secondary-btn">Share</button>
          <button type="button" className="chat-primary-btn">Create task</button>
        </div>
      </header>

      <div className="chat-layout">
        <aside className="chat-sidebar-panel" aria-label="Task overview">
          <section className="chat-sidebar-card" aria-labelledby="chat-space-heading">
            <header className="chat-sidebar-card__header">
              <div>
                <p className="chat-sidebar-card__eyebrow">Workspace</p>
                <h2 id="chat-space-heading">Hc department</h2>
              </div>
              <button type="button" className="chat-tertiary-btn">+ Create task</button>
            </header>

            <div className="chat-sidebar-card__filters" role="tablist" aria-label="Conversation filters">
              <button type="button" className="chat-chip is-active" role="tab" aria-selected="true">
                All
              </button>
              <button type="button" className="chat-chip" role="tab" aria-selected="false">
                Pinned
              </button>
            </div>

            <ul className="chat-sidebar-list">
              {pinnedConversations.map((conversation) => (
                <li key={conversation.id} className="chat-sidebar-item">
                  <div className="chat-sidebar-item__main">
                    <h3>{conversation.title}</h3>
                    <p>{conversation.summary}</p>
                  </div>
                  <span className="chat-sidebar-item__status">{conversation.status}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="chat-sidebar-card" aria-labelledby="chat-tasks-heading">
            <header className="chat-sidebar-card__header">
              <h2 id="chat-tasks-heading">Your tasks</h2>
              <span className="chat-sidebar-pill">Today</span>
            </header>

            <ul className="chat-sidebar-list">
              {activeTasks.map((task) => (
                <li key={task.id} className="chat-sidebar-item">
                  <div className="chat-sidebar-item__main">
                    <h3>{task.title}</h3>
                    <p>{task.due}</p>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="chat-sidebar-footer">
              <div className="chat-user-chip">
                <span className="chat-avatar" aria-hidden="true">
                  AS
                </span>
                <div>
                  <p className="chat-user-chip__name">Adam Smith</p>
                  <p className="chat-user-chip__role">People Operations</p>
                </div>
              </div>
              <div className="chat-sidebar-footer__meta">
                <span className="chat-token">200 coins left</span>
              </div>
            </footer>
          </section>

          <section className="chat-sidebar-card" aria-labelledby="chat-archive-heading">
            <header className="chat-sidebar-card__header">
              <h2 id="chat-archive-heading">Archive tasks</h2>
              <span className="chat-sidebar-pill chat-sidebar-pill--muted">2</span>
            </header>
            <ul className="chat-sidebar-list chat-sidebar-list--compact">
              {archivedTasks.map((task) => (
                <li key={task.id} className="chat-sidebar-item">
                  <div className="chat-sidebar-item__main">
                    <h3>{task.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        <div className="chat-main-panel">
          <article className="chat-welcome-card">
            <div className="chat-welcome-card__content">
              <div className="chat-welcome-card__intro">
                <span className="chat-avatar chat-avatar--assistant" aria-hidden="true">
                  O
                </span>
                <div>
                  <p className="chat-welcome-card__headline">Hey Adam, Welcome to Infliera</p>
                  <p className="chat-welcome-card__body">
                    I&apos;m Odie—your non-billing AI with Supreme Court smarts. Let&apos;s dive into the fine print and
                    translate it into action plans.
                  </p>
                </div>
              </div>
              <div className="chat-welcome-card__actions">
                <button type="button" className="chat-primary-btn chat-primary-btn--ghost">
                  Connect dataset
                </button>
                <button type="button" className="chat-tertiary-btn">Agent mode</button>
              </div>
            </div>
          </article>

          <div className="chat-thread" role="log" aria-live="polite">
            {chatMessages.map((message) => {
              const avatarClassName =
                message.role === 'assistant'
                  ? 'chat-avatar chat-avatar--assistant'
                  : 'chat-avatar chat-avatar--user';
              const initials = message.role === 'assistant' ? 'O' : 'AS';

              return (
                <article key={message.id} className={`chat-message chat-message--${message.role}`}>
                  <div className="chat-message__avatar" aria-hidden="true">
                    <span className={avatarClassName}>{initials}</span>
                  </div>
                  <div className="chat-message__bubble" data-role={message.role}>
                    <header className="chat-message__meta">
                      <span className="chat-message__author">{message.author}</span>
                      <span className="chat-message__time">{message.time}</span>
                    </header>
                    <p>{message.content}</p>
                    {message.highlights ? (
                      <ul className="chat-message__highlights">
                        {message.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          <form className="chat-composer" aria-label="Send a message" onSubmit={(event) => event.preventDefault()}>
            <div className="chat-composer__input">
              <button type="button" className="chat-icon-btn" aria-label="Attach file">
                <span aria-hidden="true">+</span>
              </button>
              <textarea
                className="chat-composer__textarea"
                placeholder="Ask, assign or search for anything..."
                rows={1}
                aria-label="Message"
              />
              <button type="button" className="chat-icon-btn" aria-label="Insert emoji">
                <span aria-hidden="true">😊</span>
              </button>
            </div>
            <div className="chat-composer__footer">
              <div className="chat-composer__status">
                <span className="chat-mode-chip">Agent responding in real time</span>
                <span className="chat-token">Response ETA: 3s</span>
              </div>
              <div className="chat-composer__actions">
                <button type="button" className="chat-secondary-btn">Draft email</button>
                <button type="submit" className="chat-primary-btn">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChatPage;
