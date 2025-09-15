import React from 'react';
import RowActionMenu from './RowActionMenu';

const fileTypeStyles = {
  pdf: { label: 'PDF', bg: 'rgba(236, 72, 153, 0.12)', color: '#be185d' },
  csv: { label: 'CSV', bg: 'rgba(16, 185, 129, 0.12)', color: '#047857' },
  xls: { label: 'XLS', bg: 'rgba(59, 130, 246, 0.12)', color: '#1d4ed8' },
  xlsx: { label: 'XLSX', bg: 'rgba(59, 130, 246, 0.12)', color: '#1d4ed8' },
  default: { label: 'FILE', bg: 'rgba(107, 114, 128, 0.12)', color: '#374151' },
};

const formatDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

const formatFileType = (extension) => {
  const key = extension?.toLowerCase();
  return fileTypeStyles[key] ?? fileTypeStyles.default;
};

const formatFileSize = (sizeMB) => `${Number(sizeMB ?? 0).toFixed(1)} MB`;

const FileTable = ({ files, onDownload, onRemove }) => {
  return (
    <div className="table-wrapper">
      <table className="file-table">
        <thead>
          <tr>
            <th scope="col">File name</th>
            <th scope="col">Data type</th>
            <th scope="col">Size</th>
            <th scope="col">Uploaded</th>
            <th scope="col" className="file-table__actions-header">
              <span className="sr-only">Row actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {files.length === 0 ? (
            <tr>
              <td colSpan={5}>
                <div className="table-empty-state">
                  <h3>No datasets connected yet</h3>
                  <p>Upload your first dataset to see it listed here.</p>
                </div>
              </td>
            </tr>
          ) : (
            files.map((file) => {
              const type = formatFileType(file.extension);
              return (
                <tr key={file.id}>
                  <td>
                    <div className="file-table__file-cell">
                      <span
                        className="file-table__file-icon"
                        style={{ backgroundColor: type.bg, color: type.color }}
                        aria-hidden="true"
                      >
                        {type.label}
                      </span>
                      <div className="file-table__file-meta">
                        <span className="file-table__file-name">{file.name}</span>
                        {file.description ? (
                          <span className="file-table__file-description">{file.description}</span>
                        ) : null}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="file-table__badge">{file.dataType}</span>
                  </td>
                  <td>{formatFileSize(file.sizeMB)}</td>
                  <td>{formatDate(file.uploadedAt)}</td>
                  <td className="file-table__actions-cell">
                    <RowActionMenu
                      onDownload={() => onDownload(file.name)}
                      onRemove={() => onRemove(file.id, file.name)}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FileTable;
