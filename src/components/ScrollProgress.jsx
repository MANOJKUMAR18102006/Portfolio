import { useScrollProgress } from '../hooks';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="progress-bar"
      style={{ width: `${progress}%` }}
    />
  );
}
