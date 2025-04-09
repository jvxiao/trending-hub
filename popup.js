document.getElementById('toggleButton').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleFeature,
  });

  document.getElementById('status').textContent = 
    `Status: ${document.getElementById('status').textContent.includes('Active') ? 'Inactive' : 'Active'}`;
});

function toggleFeature() {
  // 这里可以添加实际的功能逻辑
  console.log('Feature toggled!');
}