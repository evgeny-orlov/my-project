
import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};

export const TitleNull = {
  args: {
    task: {
      id: '1',
      title: '',
      state: 'TASK_ARCHIVED', 
    },
  },
};

export const LongText = {
  args: {
    task: {
      id: '110',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus nisl ut iaculis venenatis. Donec fermentum nisl quam, vel suscipit felis convallis et. Praesent malesuada elit vitae suscipit finibus. Nam ut dignissim tortor. Aenean in vestibulum leo, et aliquam nibh. Praesent at nisl ex. Morbi eleifend sagittis metus in interdum. Donec vulputate ex ut metus pulvinar porttitor. Morbi et odio eu ex lobortis mattis et eget metus.',
      state: '', 
    },
  },
};

export const Default3 = {
  args: {
    task: {
      id: '1',
      title: 'Введите текст',
      state: 'TASK_PINNED'
    },
  },
};