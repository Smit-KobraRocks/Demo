import React, { useEffect, useMemo, useState } from 'react';
import UploadButton from './UploadButton';
import FileTable from './FileTable';
import PaginationControls from './PaginationControls';

const initialFiles = [
  {
    id: 'file-1',
    name: 'campaign_performance_q1.pdf',
    extension: 'pdf',
    dataType: 'Marketing Report',
    sizeMB: 18.4,
    uploadedAt: '2024-02-18T12:14:00Z',
    description: '3,245 rows • Updated weekly',
  },
  {
    id: 'file-2',
    name: 'product_catalog.csv',
    extension: 'csv',
    dataType: 'Product Catalog',
    sizeMB: 6.2,
    uploadedAt: '2024-02-12T08:20:00Z',
    description: 'SKU and inventory data',
  },
  {
    id: 'file-3',
    name: 'sales_forecast.xlsx',
    extension: 'xlsx',
    dataType: 'Finance',
    sizeMB: 12.1,
    uploadedAt: '2024-01-28T14:10:00Z',
    description: 'Forecasted revenue by region',
  },
  {
    id: 'file-4',
    name: 'user_behaviour_snapshot.csv',
    extension: 'csv',
    dataType: 'User Analytics',
    sizeMB: 22.4,
    uploadedAt: '2024-01-20T09:00:00Z',
    description: '7,890 events • Rolling 30 days',
  },
  {
    id: 'file-5',
    name: 'loyalty_members.pdf',
    extension: 'pdf',
    dataType: 'CRM',
    sizeMB: 4.9,
    uploadedAt: '2023-12-12T11:42:00Z',
    description: 'Active members list',
  },
  {
    id: 'file-6',
    name: 'support_tickets.xlsx',
    extension: 'xlsx',
    dataType: 'Customer Support',
    sizeMB: 9.6,
    uploadedAt: '2023-11-29T16:45:00Z',
    description: 'Ticket volume by type',
  },
  {
    id: 'file-7',
    name: 'ad_spend.csv',
    extension: 'csv',
    dataType: 'Marketing',
    sizeMB: 15.8,
    uploadedAt: '2023-11-10T07:20:00Z',
    description: 'Daily spend by channel',
  },
  {
    id: 'file-8',
    name: 'warehouse_levels.xlsx',
    extension: 'xlsx',
    dataType: 'Operations',
    sizeMB: 11.7,
    uploadedAt: '2023-10-30T19:05:00Z',
    description: 'Regional stock coverage',
  },
];

const ConnectDatasetPage = () => {
  const [files, setFiles] = useState(initialFiles);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [statusMessage, setStatusMessage] = useState('');

  const totalPages = Math.max(1, Math.ceil(files.length / pageSize));

  useEffect(() => {
    if (!statusMessage) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setStatusMessage(''), 3200);
    return () => window.clearTimeout(timeout);
  }, [statusMessage]);

  const paginatedFiles = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return files.slice(start, start + pageSize);
  }, [files, currentPage, pageSize]);

  const pageRangeStart = files.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const pageRangeEnd = files.length === 0 ? 0 : pageRangeStart + paginatedFiles.length - 1;

  const handleUpload = (file) => {
    if (!file) {
      return;
    }

    const extension = file.name.includes('.')
      ? file.name.split('.').pop()?.toLowerCase() ?? 'file'
      : 'file';

    const uploadedFile = {
      id: `upload-${Date.now()}`,
      name: file.name,
      extension,
      dataType: 'Uncategorised',
      sizeMB: Number((file.size / (1024 * 1024)).toFixed(2)),
      uploadedAt: new Date().toISOString(),
      description: 'Imported just now',
    };

    setFiles((prev) => [uploadedFile, ...prev]);
    setCurrentPage(1);
    setStatusMessage(`${file.name} uploaded successfully.`);
  };

  const handleDownload = (fileName) => {
    setStatusMessage(`Preparing download for ${fileName}...`);
  };

  const handleRemove = (fileId, fileName) => {
    setFiles((prev) => {
      const nextFiles = prev.filter((file) => file.id !== fileId);
      const nextTotalPages = Math.max(1, Math.ceil(nextFiles.length / pageSize));
      if (currentPage > nextTotalPages) {
        setCurrentPage(nextTotalPages);
      }
      return nextFiles;
    });
    setStatusMessage(`${fileName} removed.`);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="page" id="connect-dataset">
      <header className="page-header">
        <div>
          <p className="page-subtitle">Data Management</p>
          <h1>Connect Dataset</h1>
          <p className="page-description">
            Upload spreadsheets, CSV files, and PDFs to sync all of your operational data with PixelGrid.
          </p>
        </div>
        <UploadButton onUpload={handleUpload} />
      </header>

      {statusMessage ? (
        <div className="page-banner" role="status" aria-live="polite">
          {statusMessage}
        </div>
      ) : null}

      <div className="table-card">
        <FileTable
          files={paginatedFiles}
          onDownload={handleDownload}
          onRemove={handleRemove}
        />
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={files.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          pageRangeStart={pageRangeStart}
          pageRangeEnd={pageRangeEnd}
        />
      </div>
    </section>
  );
};

export default ConnectDatasetPage;
