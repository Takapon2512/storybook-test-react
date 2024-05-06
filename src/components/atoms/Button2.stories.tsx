import type { Meta, StoryObj } from '@storybook/react';
import { Button2 } from './Button2';

const meta: Meta<typeof Button2> = {
  title: 'Atoms/Button2',
  component: Button2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button2>;

export const Primary: Story = {
  args: {
    primary: true,
    innerText: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    innerText: 'Button',
  },
};

export const Large: Story = {
  args: {
    fontSize: 'lg',
    innerText: 'Button',
  },
};

export const Small: Story = {
  args: {
    fontSize: 'sm',
    innerText: 'Button',
  },
};

